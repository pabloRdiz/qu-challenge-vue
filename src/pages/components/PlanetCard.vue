<template>
  <Card>
    <h1 class="planet-title">{{ name }}</h1>
    <p class="planet-diameter">
      {{ diameter }} <span class="planet-diameter-unit">km</span>
    </p>

    <div class="planet-boby">
      <div class="text-left">
        <p>
          Rotation period
          <span class="planet-props-values"> {{ rotationPeriod }}</span> hours
        </p>
        <p>
          Orbital period
          <span class="planet-props-values">{{ orbitalPeriod }}</span> days
        </p>
      </div>
      <div class="text-right">
        <p>
          Residents
          <span class="planet-props-values"> {{ residents }}</span>
        </p>
        <p>
          Films
          <span class="planet-props-values"> {{ films }}</span>
        </p>
      </div>
    </div>
    <div className="pills-container" role="list">
      <Pills
        v-for="climate in getClimates"
        :key="climate"
        :value="climate"
        :colors="climateColors"
      />
    </div>
    <div className="pills-container" role="list">
      <Pills
        v-for="terrain in getTerrains"
        :key="terrain"
        :value="terrain"
        :colors="terrainColors"
      />
    </div>
  </Card>
</template>

<script >
import Card from "../../components-ui/Card.vue";
import Pills from "./Pills.vue";
import { CLIMATE_COLORS, TERRAIN_COLOR } from "../../constants";
import { splitText } from "../../utils";

export default {
  components: { Card, Pills },
  props: {
    name: { type: String, required: true },
    diameter: { type: String, required: true },
    rotationPeriod: { type: String, required: true },
    orbitalPeriod: { type: String, required: true },
    residents: { type: Number, required: true },
    films: { type: Number, required: true },
    climates: { type: String },
    terrains: { type: String },
  },
  data() {
    return {
      climateColors: CLIMATE_COLORS,
      terrainColors: TERRAIN_COLOR,
    };
  },
  computed: {
    getClimates() {
      if (!this.climates) return;
      return splitText(this.climates);
    },
    getTerrains() {
      return splitText(this.terrains);
    },
  },
};
</script>

<style scoped>
.planet-title {
  background-clip: text;
  background: linear-gradient(to right, #ffd900 0, #f5e069 20%, #eef0b4 100%);
  font-size: 32px;
  margin: 4px 0 4px 0;
  text-align: left;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.planet-diameter {
  font-size: 40px;
  font-weight: 800;
  margin: 4px 0 4px 0;
  text-align: left;
}
.planet-diameter-unit {
  font-size: 20px;
  color: #dddddd;
}
.planet-boby {
  display: grid;
  grid-template-columns: 1fr 1fr;
  letter-spacing: 0.1em;
  font-weight: 500;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.planet-props-values {
  font-weight: 800;
  font-size: 20px;
}
.pills-container {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

@media only screen and (max-width: 600px) {
  .planet-boby {
    grid-template-columns: 1fr;
  }
  .pills-container {
    justify-content: center;
  }
}
</style>