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
      <tr v-for="(product, index) in productList" :key="index">
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
  name: "DatabindingList",
  data() {
    return {
      productList: [
        {"product_name": "기계식 키보드", "price": 25000, "category": "노트북/태블릿", "delivery_price": 5000},
        {"product_name": "무선마우스", "price": 12000, "category": "노트북/태블릿", "delivery_price": 2000},
        {"product_name": "아이패드", "price": 725000, "category": "노트북/태블릿", "delivery_price": 3000},
        {"product_name": "태블릿거치대", "price": 32000, "category": "노트북/태블릿", "delivery_price": 2000},
        {"product_name": "무선충전기", "price": 42000, "category": "노트북/태블릿", "delivery_price": 1000}
      ]
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