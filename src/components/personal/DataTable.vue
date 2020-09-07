<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :hide-default-header="withoutHeader"
      :hide-default-footer="withoutHeader || withoutFooter"
      :headers-length="headers.length"
      item-key="idRow"
      disable-filtering
      disable-sort
      :show-expand="expandable"
      fixed-header
    >
      <template v-if="expandable" v-slot:expanded-item="{ headers, item }">
        <td v-if="item.children" :colspan="headers.length" style="padding-right: 0;">
          <data-table :items="item.children" :headers="headers" :without-header="true"></data-table>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    items: {
      required: true
    },
    headers: {
      required: true
    },
    withoutHeader: {
      default: false
    },
    withoutFooter: {
      default: false
    },
    expandable: {
      default: true
    }
  }
}
</script>
