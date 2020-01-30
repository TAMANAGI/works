<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{on}">
        <v-btn v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Registration</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name *"
                  v-model="name"
                  ref="name"
                  :rules="[() => !!name || 'This field is required']"

                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  label="Type *"
                  :items="['List', 'Batch', 'CustomAction']"
                  v-model="type"
                  ref="type"
                  :rules="[() => !!type || 'This field is required']"

                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="URL *"
                  v-model="url"
                  ref="url"
                  :rules="[() => !!url || 'This field is required']"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    namespaced: true,
    data() {
      return {
        dialog: false,
        formHasErrors: false,
        name: "",
        url: "",
        type: "",
      }
    },
    computed: {
      getForm() {
        return {
          name: this.name,
          type: this.type,
          url: this.url,
        }
      },
    },
    methods: {
      close() {
        this.dialog = false;
      },
      save() {
        this.formHasErrors = false
        Object.keys(this.getForm).forEach(f => {
          if (!this.getForm[f]) this.formHasErrors = true
          this.$refs[f].validate(true)
        })
  
        if (!this.formHasErrors) {
          const formData = {
            name: this.name,
            type: this.type,
            url: this.url,
          }
          this.$store.dispatch('bsp/addTaskAsync', formData);
        }
        this.close();
      }
    },
  }
</script>

<style lang="scss" scoped>
  
</style>