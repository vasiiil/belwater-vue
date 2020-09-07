<template>
  <v-container fluid class="pt-6">
    <p>
      Регистрация учетных данных в разделе «Личный кабинет» на сайте <a href="/" target="_blank">www.belwater.ru</a>
      производится для автоматизированного доступа и проведения операций абонентом со своим лицевым счетом.
    </p>
    <p>
      Для входа в раздел «Личный кабинет» необходимо пройти процедуру авторизации/регистрации.
    </p>
    <p>
      Для регистрации в поле «Логин» формы необходимо ввести номер лицевого счета в ГУП «Белоблводоканал», в поле
      "Фамилия" - фамилию, на которую зарегистрирован лицевой счет.
    </p>
    <p>
      При необходимости номер лицевого счета можно получить через <a href="/feedback/" target="_blank">форму обратной
      связи</a> на сайте (сообщение должно содержать ФИО собственника и адрес объекта, на который открыт лицевой счет)
      или при непосредственном посещении ГУП "Белоблводоканал" по адресу г. Белгород, ул. 3-го Интернационала, 40 (при
      себе необходимо иметь паспорт).
    </p>
    <p>
      На текущий момент просмотр баланса доступен только абонентам ГУП «Белоблводоканал», проживающим в г. Белгороде и
      Белгородском районе.
    </p>

    <form class="mt-5">
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="accountNumber"
            label="Номер лицевого счета"
            outlined
            @blur="$v.accountNumber.$touch()"
            :error-messages="accountNumberErrors"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Пароль (мин. 6 символов)"
            outlined
            type="password"
            @blur="$v.password.$touch()"
            :error-messages="passwordErrors"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="Подтверждение пароля"
            outlined
            type="password"
            @blur="$v.confirmPassword.$touch()"
            :error-messages="confirmPasswordErrors"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Адрес e-mail"
            type="email"
            outlined
            @blur="$v.email.$touch()"
            :error-messages="emailErrors"
          ></v-text-field>
          <v-text-field
            v-model="surname"
            label="Фамилия"
            outlined
            @blur="$v.surname.$touch()"
            :error-messages="surnameErrors"
          ></v-text-field>
          <v-text-field
            v-model="name"
            label="Имя"
            outlined
            @blur="$v.name.$touch()"
            :error-messages="nameErrors"
          ></v-text-field>
          <v-text-field
            v-model="secondName"
            label="Отчество"
            outlined
            @blur="$v.secondName.$touch()"
            :error-messages="secondNameErrors"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            label="Телефон"
            type="phone"
            outlined
            @blur="$v.phone.$touch()"
            :error-messages="phoneErrors"
          ></v-text-field>
          <v-checkbox
            v-model="agreement"
            @blur="$v.agreement.$touch()"
            @change="$v.agreement.$touch()"
            :error-messages="agreementErrors"
          >
            <template v-slot:label>
              <div>
                Я даю свое согласие на передачу и обработку персональных данных согласно
                <a
                  target="_blank"
                  href="/"
                  @click.stop
                >
                  Политике конфиденциальности
                </a> и
                <a
                  target="_blank"
                  href="/"
                  @click.stop
                >
                  Пользовательскому соглашению
                </a>
              </div>
            </template>
          </v-checkbox>
          <v-btn :disabled="hasErrors" class="mt-3" @click="onSubmit">Регистрация</v-btn>
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
import axios from '../../axios-belwater-api'

export default {
  name: 'SignUp',
  data () {
    return {
      accountNumber: '',
      password: '',
      confirmPassword: '',
      email: '',
      name: '',
      surname: '',
      secondName: '',
      phone: '',
      agreement: ''
    }
  },
  methods: {
    ...mapActions('userAuth', ['signup']),
    ...mapActions('preloader', ['show_preloader']),
    onSubmit () {
      this.show_preloader()
      const formData = {
        accountNumber: this.accountNumber,
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname,
        secondName: this.secondName,
        phone: this.phone
      }

      this.signup(formData)
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    hasErrors () {
      return this.$v.accountNumber.$invalid ||
        this.$v.password.$invalid ||
        this.$v.email.$invalid ||
        this.$v.name.$invalid ||
        this.$v.phone.$invalid ||
        this.$v.agreement.$invalid
    },
    accountNumberErrors () {
      const errors = []
      if (!this.$v.accountNumber.$dirty) return errors
      // !this.$v.accountNumber.unique && errors.push('Этот лицевой счет уже зарегистрирован')
      !this.$v.accountNumber.minLen && errors.push('Лицевой счет должен быть не менее ' + this.$v.accountNumber.$params.minLen.min + ' символов')

      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Поле обязательно для заполнения')
      !this.$v.email.email && errors.push('Введите корректный email')
      !this.$v.email.unique && errors.push('Данный email уже зарегистрирован')

      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Поле обязательно для заполнения')
      !this.$v.password.minLen && errors.push('Пароль должен быть не менее ' + this.$v.password.$params.minLen.min + ' символов')

      return errors
    },
    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.confirmPassword.$dirty) return errors
      !this.$v.confirmPassword.sameAs && errors.push('Пароли не совпадают')

      return errors
    },
    agreementErrors () {
      const errors = []
      if (!this.$v.agreement.$dirty) return errors
      !this.$v.agreement.checked && errors.push('Необходимо принять соглашение')

      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Поле обязательно для заполнения')
      !this.$v.name.minLen && errors.push('Имя должно быть не менее ' + this.$v.name.$params.minLen.min + ' символов')

      return errors
    },
    surnameErrors () {
      const errors = []
      if (!this.$v.surname.$dirty) return errors
      !this.$v.surname.required && errors.push('Поле обязательно для заполнения')
      !this.$v.surname.minLen && errors.push('Фамилия должна быть не менее ' + this.$v.surname.$params.minLen.min + ' символов')

      return errors
    },
    secondNameErrors () {
      const errors = []
      if (!this.$v.secondName.$dirty) return errors
      !this.$v.secondName.required && errors.push('Поле обязательно для заполнения')
      !this.$v.secondName.minLen && errors.push('Отчество должно быть не менее ' + this.$v.secondName.$params.minLen.min + ' символов')

      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Поле обязательно для заполнения')

      return errors
    }
  },
  validations: {
    accountNumber: {
      minLen: minLength(6)
    },
    email: {
      required,
      email,
      unique: val => {
        if (val === '') {
          return true
        }
        return axios.post('auth/check-unique', { LoginForm: { email: val } })
          .then(response => {
            console.log(response)
            return !response.data.err
          })
          .catch(error => {
            console.log(error)
            return false
          })
      }
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password')
    },
    agreement: {
      checked: val => { return val }
    },
    name: {
      required,
      minLen: minLength(3)
    },
    surname: {
      required,
      minLen: minLength(3)
    },
    secondName: {
      required,
      minLen: minLength(3)
    },
    phone: {
      required
    }
  },
  watch: {
    isAuthenticated () {
      if (this.isAuthenticated) {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style scoped>
  .v-btn {
    text-transform: none;
  }
</style>
