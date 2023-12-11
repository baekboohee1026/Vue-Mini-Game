function getRandomValue(min, max) {
  const randomValue = Math.floor(Math.random() * (max - min) + min);
  console.log("Random value:", randomValue); // 콘솔에 랜덤 값 출력
  return randomValue;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },

  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      //console.log("Monster health:", this.monsterHealth); // 몬스터의 체력 출력
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      //console.log("Player health:", this.playerHealth); // 모험가의 체력 출력
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
});
app.mount("#game");
console.log("Vue app mounted!");
