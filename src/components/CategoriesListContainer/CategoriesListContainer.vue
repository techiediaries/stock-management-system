<template>
  <div>
    <v-layout row wrap mb-5>
      <UserTypeCard
        userType="Categories"
        :count="categoriesCount"
        iconType="CATEGORY"
      />
    </v-layout>
    <v-flex lg12 md12>
      <Section sectionTitle="Liste des Categories"/>
      <CustomizedDatatable
        :headers="headers"
        :data = "categoriesList"
      >
        <template v-slot:add>
          <AddCategoryForm
            :addElement="addElement"
          />
        </template>
        <template v-slot:delete="{element}">
          <ConfirmDeleteElementPopup
            deleteConfirmationMessage="Etes-vous sur de vouloir supprimer cette catégorie ?"
            :element="element"
            :deleteElement="deleteElement"
          />
        </template>
        <template v-slot:edit="{element}">
          <EditCategoryFormPopup
            :element="element"
            :editElement="editElement"
          />
        </template>
      </CustomizedDatatable>
    </v-flex>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Indicators from "../Indicators/Indicators.vue";
  import UserTypeCard from "../UserTypeCard/UserTypeCard.vue";
  import {mockedDataTable} from "../../helpers/properties";
  import CustomizedDatatable from "../CustomizedDatatable/CustomizedDatatable.vue";
  import Section from "../Section/Section.vue";
  import store from "../../store";
  import ConfirmDeleteElementPopup from "../ConfirmDeleteElementPopup/ConfirmDeleteElementPopup.vue";
  import EditCategoryFormPopup from "./EditCategoryFormPopup.vue";
  import AddCategoryForm from "./AddCategoryForm.vue";


  @Component({
    components: { UserTypeCard, Indicators, CustomizedDatatable, Section, ConfirmDeleteElementPopup, EditCategoryFormPopup, AddCategoryForm },
    computed: {
      categoriesList: function() {
        return store.getters.categories;
      },
      categoriesCount: function() {
        return store.getters.categoriesCount;
      }
    }
  })
  export default class CategoriesListContainer extends Vue {
    headers: any = mockedDataTable.categories_header;
    categoriesList!: any;
    categoriesCount!: number;

    deleteElement: Function = (id: any) => {
      this.$store.dispatch("deleteCategory", id.category_code);
    };

    editElement: Function = (categoryToUpdateCode: string, category: any) => {
      this.$store.dispatch("editCategory", {categoryToUpdateCode, category});
    };

    addElement: Function = (category: any) => {
      this.$store.dispatch("addCategory", category);
    };

    created() {
      this.$store.dispatch("getCategories");
    }
  }
</script>