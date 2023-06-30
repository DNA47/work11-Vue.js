console.log(Vue);


const recordsList = [
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },
  {
    date: '13 sent 2019 (13:57)',
    time: '13:57',
    text:"Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями"
  },

]

const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const records =  ref([]);
    const symbolCounter = ref(0);
    const isBtnClickable = ref(false);
    console.log(isBtnClickable.value);

    const btnClassName = ref(isBtnClickable.value ? 'enabled' : 'disabled');

    const textLimitterClass = ref('');

    const textarea = ref(null);

    // console.log( $refs.textarea);

    const classCounter = ref(0);
    // let seen = true;

    return {
      classCounter,
      records,
      isBtnClickable,
      btnClassName,
      symbolCounter
    //   seen,
    };
  },
  methods: {
    increment() {
        this.count++;
        this.classCounter = this.count % 3;
    },
    toggler() {
        console.log('click');
        this.seen = !this.seen;
        console.log(this.seen);
    },
    checkValueLength(e) {
      const input = e.currentTarget;

      if(input.value.length < 145) {
        this.symbolCounter = input.value.length;
      } else {
        this.symbolCounter = (input.value.length - 144) * (-1);
      }

      if(input.value.length < 134) {
        this.textLimitterClass = '';
      } else if (input.value.length < 145) {
        this.textLimitterClass = 'warn';
      } else {
        this.textLimitterClass = 'error';
      }

   
      



      console.log("Символов в строке: " + this.symbolCounter);
      this.btnClassName = this.symbolCounter > 0 ? 'enabled' : 'disabled';
    },
    handleSubmit(e) {
      const form = e.currentTarget;
      const msgInput = form.elements.post_message;

      const now = new Date;
      const msgDate = new Intl.DateTimeFormat('ru', {year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric"}).format(now);

      const newRecord = {
        id: 'record_#' + this.records.length,
        date: msgDate,
        text: msgInput.value
      }

      console.log(newRecord);

      this.records.push(newRecord);
      this.$refs.textarea.value = ''; 
      this.symbolCounter = 0;
    }
  },
  data() {
    // let seen = false;


    return {
      seen: false,
      count: 1,
      testMesh: '',
    //   toggler
    };
  },
});

console.log(app);

app.mount("#app");

app.config.errorHandler = (err) => {
  /* handle error */
  console.warn("У вас какая-то ошибка!!!");
  console.error(err);
};
