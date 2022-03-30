import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding";
import DataBindingHtml from "@/views/DataBindingHtml";
import DataBindingInputText from "@/views/DataBindingInputText";
import DataBindingInputNumber from "@/views/DataBindingInputNumber";
import DataBindingTextarea from "@/views/DataBindingTextarea";
import DataBindingSelect from "@/views/DataBindingSelect";
import DataBindingCheckBox from "@/views/DataBindingCheckBox";
import DataBindingCheckBox2 from "@/views/DataBindingCheckBox2";
import DataBindingRadio from "@/views/DataBindingRadio";
import DataBindingAttribue from "@/views/DataBindingAttribue";
import DataBindingButton from "@/views/DataBindingButton";
import DataBindingClass from "@/views/DataBindingClass";
import DataBindingClass2 from "@/views/DataBindingClass2";
import DataBindingStyle from "@/views/DataBindingStyle";
import DataBindingList from "@/views/DatabindingList";
import RenderingVIf from "@/views/RenderingVIf";
import EventClick from "@/views/EventClick";
import EventChange from "@/views/EventChange";
import Computed from "@/views/Computed";
import Watch from "@/views/Watch";
import DataBindingList2 from "@/views/DataBindingList2";
import NestedComponent from "@/views/NestedComponent";
import ParnetComponent from "@/views/ParnetComponent";
import ParentComponent2 from "@/views/ParentComponent2";
import ParentComponent3 from "@/views/ParentComponent3";
import ChildComponent4 from "@/views/ChildComponent4";
import ParentComponent5 from "@/views/ParentComponent5";
import SlotUseModalLayout from "@/views/SlotUseModalLayout";
import ProvideInject from "@/views/ProvideInject";
import CalculatorTest from "@/views/Calculator";
import CompositionAPI from "@/views/CompositionAPI";
import CompositionAPI2 from "@/views/CompositionAPI2";
import CompositionAPI3 from "@/views/CompositionAPI3";


/**
 * home / about 라우트의 큰 차이점은 import 시점
 * home 방식 -> path 에 접근하지 않더라도 이미 vue 파일을 import
 * about 방식 -> path 에 접근하기 전까지는 vue 파일에 대한 import 가 일어나지 않음
 */

const routes = [
  {
    // path: 브라우저에서 접속하는 url 주소를 정의
    path: '/',
    name: 'home',
    // component: 지정된 path 로 들어왔을 때 보여줄 vue 컴포넌트
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting -> 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route -> 이 라우트에 대한 chunk 파일이 분리되어 생성
    // which is lazy-loaded when the route is visited. -> 이 라우트에 방문했을 때 lazy-load 됨
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckBox',
    component: DataBindingCheckBox
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckBox2',
    component: DataBindingCheckBox2
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindinglist',
    name: 'DatabindingList',
    component: DataBindingList
  },
  {
    path: '/renderinfvif',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParnetComponent',
    component: ParnetComponent
  },
  {
    path: '/parentcomponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/parentcomponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/parentcomponent4',
    name: 'ChildComponent4',
    component: ChildComponent4
  },
  {
    path: '/parentcomponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/slotusemodallayout',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/calculatortest',
    name: 'CalculatorTest',
    component: CalculatorTest
  },
  {
    path: '/compositionsapi',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/compositionsapi2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/compositionsapi3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
