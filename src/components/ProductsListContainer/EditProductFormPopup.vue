<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-icon color="grey">edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Modifier l'article <span class="green--text"> {{element.product_code}} | {{element.product_name}} </span></span>
      </v-card-title>
      <v-form
        v-model="valid"
        @submit.prevent="() => {handleSubmit(element.product_code)}"
      >
        <v-card-text>
          <v-container grid-list-md>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Code de l'article"
                hint="entrer un code unique pour identifier l'article"
                required
                v-model="productCode"
                id="productCode"
                name="productCode"
                :rules="rules"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Nom de l'article"
                hint="Choisir un nom pour l'article"
                required
                v-model="productName"
                id="productName"
                name="productName"
                :rules="rules"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="package de l'article"
                hint="Définir le packaging de l'article"
                required
                v-model="productPackaging"
                id="productPackaging"
                name="productPackaging"
                :rules="rules"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-select
                :items="categoriesCodesList"
                label="Catégorie de l'article"
                hint="Choisir le code de la catégorie pour cet article"
                required
                v-model="productCategoryId"
                id="productCategoryId"
                name="productCategoryId"
                :rules="rules"
              ></v-select>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-textarea
                label="description de l'article"
                hint="Donner une description pour cet article"
                auto-grow
                rows="1"
                v-model="productDescription"
                id="productDescription"
                name="productDescription"
              ></v-textarea>
            </v-flex>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="green darken-1"
            flat
            type="submit"
          >
            Confirmer
          </v-btn>
          <v-btn
            color="red darken-1"
            flat
            @click="dialog=false"
          >
            Annuler
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class EditProductFormPopup extends Vue{
    @Prop() readonly editElement: Function;
    @Prop() readonly element: any;
    @Prop() readonly categoriesCodesList: any;

    productCode: string = this.element.product_code;
    productName: string = this.element.product_name;
    productPackaging: string = this.element.product_packaging;
    productDescription: string = this.element.product_description;
    productCategoryId: string = this.element.category_id;
    dialog: boolean = false;
    rules: any[] = [(v: boolean) => !!v || "Ce champ est obligatoire"];
    valid: boolean = false;

    handleSubmit(productCode: string) {
      this.editElement(productCode, {
        "product_code": this.productCode,
        "product_name": this.productName,
        "product_packaging": this.productPackaging,
        "product_description": this.productDescription,
        "category": this.productCategoryId
      });
      this.dialog = false;
    }
  }
</script>