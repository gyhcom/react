import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConectp";
import TabButton from "./components/TabButton";
import {useState} from "react";
import {EXAMPLES} from './data.js'

function App() {
    const [selectedTopic, setSeletedTopic] = useState('');

    function handleSelect(selectedButton) {
        setSeletedTopic(selectedButton); // 상태 변경 -> 자동 리렌더링
        console.log(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>
    if (selectedTopic) {
        tabContent = (
            <div id={"tab-content"}>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>
                            {EXAMPLES[selectedTopic].code}
                            </code>
                            </pre>
            </div>
        )
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
                    <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
                        Components
                    </TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
                        JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
                        Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
                        State</TabButton>
                </menu>
                {tabContent}
            </section>
        </main>
    </div>);
}

export default App;
