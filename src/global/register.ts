import {ElTabs,ElTabPane} from "element-plus"
import {App} from "vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const components = [
    ElTabPane,
    ElTabs
]

export default function(app:App) :void{
 for (let component of components){
    app.component(component.name,component)
 }
 for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}