import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./style.css"
export default function App(){
    return(
        <div>
            <Header />
            <div class="Diagonal"></div>
            <About />
            <Projects />
        </div>
    )
}