import { defineAPI, defineKarman } from "karman";
import product from "./product";
import cart from "./cart";
import user from "./user";

export default defineKarman({
  url: "https://fakestoreapi.com",
  api: {
    /**
     * ### user login
     */
    login: defineAPI({
      endpoint: "auth/login",
      method: "POST",
      requestStrategy: "fetch",
      payloadDef: {
        /**
         * user name
         * @type {string}
         */
        username: {
          body: true,
          rules: ["string", { required: true, min: 1, measurement: "length" }],
        },
        /**
         * password
         * @type {string}
         */
        password: {
          body: true,
          rules: ["string", { required: true, min: 1, measurement: "length" }],
        },
      },
      /**
       * @typedef {object} LoginRes
       * @prop {string} LoginRes.token token of user account
       */
      /**
       * @type {LoginRes}
       */
      dto: null,
    }),
  },
  route: {
    /**
     * ## product management
     */
    product,
    /**
     * ## product cart management
     */
    cart,
    /**
     * ## user management
     */
    user,
  },
});
