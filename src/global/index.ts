import { App } from "vue";
import register from "./register";

export default function useApp(app:App){
  register(app)
}