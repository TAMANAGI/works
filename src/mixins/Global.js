export default { // exportする
  created() {
    // console.log('start! from mixins.');
  },
  data() {
    return {
      serverPass: 'https://localhost:3000/',
    };
  },
  methods: {
    logging() {
      console.log('XXXXXXXX');
    },
  },
  computed: {

  },
};