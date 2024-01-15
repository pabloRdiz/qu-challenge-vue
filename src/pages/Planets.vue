<template>
  <Title title="qubeyond challenge" />

  <div class="options-container">
    <Select
      :label="label"
      :options="orderByOptions"
      @optionSelected="handleOptionSelected"
    />
  </div>

  <div v-if="isLoading && planets.length === 0" class="spinner-container">
    <Spinner />
  </div>

  <div v-if="planets.length > 0" class="planets-container">
    <PlanetCard
      v-for="planet in planets"
      :key="planet.name"
      :name="planet.name"
      :diameter="planet.diameter"
      :rotationPeriod="planet.rotation_period"
      :orbitalPeriod="planet.orbital_period"
      :residents="planet.residents.length"
      :films="planet.films.length"
      :climates="planet.climate"
      :terrains="planet.terrain"
    />
  </div>

  <div v-if="isLoading && planets.length > 0" class="spinner-container">
    <Spinner />
  </div>

  <div v-if="!isLoading" class="load-more-action">
    <Button @click="handleClick" text="Load more +" />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import PlanetCard from "./components/PlanetCard.vue";
import Select from "../components-ui/Select.vue";
import Spinner from "../components-ui/Spinner.vue";
import Button from "../components-ui/Button.vue";
import { getPlanets } from "../services/planets";
import { sort } from "../utils";

export default {
  name: "Planets",
  components: {
    Title,
    Select,
    PlanetCard,
    Spinner,
    Button,
  },
  data() {
    return {
      label: "Select option",
      orderByOptions: [
        { value: "name", label: "name" },
        { value: "climate", label: "climate" },
        { value: "terrain", label: "terrain" },
      ],
      selected: null,
      planets: [],
      currentPage: 0,
      isLoading: false,
      orderBy: null,
    };
  },

  methods: {
    async getData(page) {
      try {
        this.isLoading = true;
        const data = await getPlanets(page);

        const { results } = data;

        const concatedPLanets = this.planets.concat(results);

        this.planets = this.orderBy
          ? sort(concatedPLanets, this.orderBy)
          : concatedPLanets;

        this.currentPage = this.currentPage + 1;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    handleClick() {
      this.getData(this.currentPage + 1);
    },
    handleOptionSelected(value) {
      const sortedPlanets = sort(this.planets, value);
      this.planets = sortedPlanets;
      this.orderBy = value;
    },
  },
  mounted() {
    this.getData(this.currentPage + 1);
  },
};
</script>

<style scoped>
.options-container {
  display: flex;
  align-items: center;
}
.planets-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em 0;
}
.spinner-container {
  display: flex;
  padding: 1em 0;
  justify-content: center;
}
.load-more-action {
  display: flex;
  padding: 1em 0;
  justify-content: center;
}
</style>