<modal-layout>
<template v-slot:header>
  <h1> 팝업 타이틀 </h1>
</template>
<template v-slot:default>
  <p>팝업 컨텐츠 1</p>
  <p>팝업 컨텐츠 2</p>
</template>
<template v-slot:footer>
  <button type="button">닫기</button>
</template>
<tempalate>
  <h2><slot></slot></h2>
</tempalate>
<PageTitle>컴포넌트 사용 예제 페이지</PageTitle>

</modal-layout>

<script>
import SlotModalLayout from "@/views/SlotModalLayout";

export default {
  name: "SlotUseModalLayout",
  components: {SlotModalLayout}
}
</script>

<style scoped>

</style>