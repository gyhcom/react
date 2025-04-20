import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConectp";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const [tabContent, setTabContent] =useState('Please click a button11')

    function handleSelect(selectedButton){
        setTabContent(selectedButton); // 상태 변경 -> 자동 리렌더링
    }
    return (<div>
        <header>
            <h1>hello</h1>
        </header>
        <Header/>

        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    <CoreConcept title={CORE_CONCEPTS[0].title}
                                 description={CORE_CONCEPTS[0].description}
                                 image={CORE_CONCEPTS[0].image}/>
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} />
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
                    <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
                    <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
                    <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>
                </menu>
            </section>
            {tabContent}
        </main>
    </div>)
}

export default App;
