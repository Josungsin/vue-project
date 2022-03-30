<template>
  <div>
    <table>
      <thead>
      <th>제품명</th>
      <th>가격</th>
      <th>카테고리</th>
      <th>배송료</th>
      </thead>
      <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{ product.product_name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.delivery_price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "DataBindingList2",
  data() {
    return {
      productList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.productList = await this.$api("https://d7df04f7-741a-4807-bd00-1eeafa1e6387.mock.pstmn.io/list", "get")
    }
  }
}
</script>

<style scoped>
table {
  font-family: Arial, snas-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>