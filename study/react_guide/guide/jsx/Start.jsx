import React from 'react';

const Start = () => {
    return (
        <>
            <section className='install'>
                <h3>리액트 시작</h3>
                <article>
                    <h4>JSX</h4>
                    <div className='codeCnt'>
                        <code>
                            <p>&#60;div <span className='spanB'>className</span><span className='spanW'>=</span><span className='spanR'>'reactClass'</span>&#62;<span className='spanW'>class</span>&#60;/div&#62;</p>
                            <br />
                            <p>&#60;label <span className='spanB'>htmlFor</span><span className='spanW'>=</span><span className='spanR'>'reactFor'</span>&#62;<span className='spanW'>for</span>&#60;/label&#62;</p>
                            <br />
                            <p>&#60;br /&#62;</p>
                        </code>
                    </div>
                    <ul>
                        <li>- jsx에서는 class를 <b>className</b>으로 사용합니다.</li>
                        <li>- jsx에서는 for을 <b>htmlFor</b>으로 사용합니다.</li>
                        <li>- 끝태그가 없는 태그들도 태그를 닫아주어야합니다.</li>
                        <li>- 하이픈스네이크는 빼기로 인식하기때문에 하이픈대신 카멜케이스를 사용하여야합니다.</li>
                    </ul>     
                </article>
                <article>
                    <h4>컴포넌트의 기본구조</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanP'>import</span> <span className='spanB'>React</span> <span className='spanP'>from</span> <span className='spanR'>'react'</span><span className='spanG'> // 리액트를 연결합니다.</span></p>
                            <br />
                            <p>const <span className='spanY'>Main</span> <span className='spanW'>= ( ) =&#62; &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanP'>return</span> <span className='spanW'>(</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;React.Fragment&#62;<span className='spanG'> // 최상단은 &#60;React.Fragment&#62;&#60;/React.Fragment&#62;나 &#60;&#62;&#60;/&#62;로 한번 감싸주어야 합니다.</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1&#62;<span className='spanW'>기본구조</span>&#60;/h1&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/React.Fragment&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>)</span></p>
                            <p><span className='spanW'>&#125;</span></p>
                            <br />
                            <p><span className='spanP'>export default</span> <span className='spanY'>Main</span><span className='spanW'>;</span><span className='spanG'> // 부모 jsx로 내보낼 파일명을 적습니다. </span></p>
                        </code>
                    </div>
                    <ul>
                        <li>- 리액트 컴포넌트의 기본구조는 위와 같습니다.</li>
                    </ul>
                </article>
                <article>
                    <h4>데이터바인딩</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanP'>import</span> <span className='spanB'>React</span> <span className='spanP'>from</span> <span className='spanR'>'react'</span></p>
                            <br />
                            <p>const <span className='spanY'>Main</span> <span className='spanW'>= ( ) =&#62; &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;const <span className='spanW'><span className='spanB'>value</span> = <span className='spanR'>'기본구조'</span> ;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanP'>return</span> <span className='spanW'>(</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;React.Fragment&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1&#62;<span className='spanW'>&#123; value &#125;</span>&#60;/h1&#62;<span className='spanG'> // 결과 : &#60;h1&#62;기본구조&#60;/h1&#62; </span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/React.Fragment&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>)</span></p>
                            <p><span className='spanW'>&#125;</span></p>
                            <br />
                            <p><span className='spanP'>export default</span> <span className='spanY'>Main</span><span className='spanW'>;</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>- 데이터 바인딩은 서버에서 가져온 데이터를 집어넣는것을 말합니다.</li>
                        <li>- &#123; &#125; 를 사용하여 데이터를 바인딩할수 있습니다.</li>
                        <li>- text, id, className등 대부분의 속성에 바인딩을 할수있습니다.</li>
                        <li>- 다만 style 바인딩은 다음과같이 괄호 두개를 사용합니다</li>
                    </ul>
                    <div className='codeCnt'>
                        <code>
                            <p>&#60;div <span className='spanB'>style</span><span className='spanW'>=</span>&#123;&#123; <span className='spanB'>color:</span> <span className='spanR'>'blue'</span> &#125;&#125;&#62;<span className='spanW'>style</span>&#60;/div&#62;</p>
                        </code>
                    </div>
                    <ul>
                        <li>- 다음과같이 함수도 바인딩 시킬수있습니다.</li>
                    </ul>
                    <div className='codeCnt'>
                        <code>
                            <p>&#60;button <span className='spanB'>onClick</span><span className='spanW'>=</span>&#123; <span className='spanY'>btnClick</span> &#125;&#62;<span className='spanW'>funcion</span>&#60;/button&#62;</p>
                        </code>
                    </div>
                </article>
                <article>
                    <h4>State</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanP'>import</span> <span className='spanB'>React</span> <span className='spanP'>from</span> <span className='spanR'>'react'</span></p>
                            <p><span className='spanP'>import</span> <span className='spanB'>&#123; useState &#125;</span> <span className='spanP'>from</span> <span className='spanR'>'react'</span><span className='spanG'> // 리액트 내장함수 useState를 연결합니다. </span></p>
                            <br />
                            <p>const <span className='spanY'>Main</span> <span className='spanW'>= ( ) =&#62; &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;const <span className='spanW'>[ <span className='spanB'>value</span>, <span className='spanY'>setValue</span> ] = <span className='spanY'>useState</span>( <span className='spanR'>'기본구조'</span> );</span><span className='spanG'> // state저장 : value는 변수명, '기본구조'는 데이터가 됩니다. </span></p>
                            <br />
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanY'>textChange</span> <span className='spanW'>= ( ) =&#62; &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const <span className='spanB'>newText</span> <span className='spanW'>= <span className="spanR">'텍스트변경'</span>;</span><span className='spanG'> // 변경될 데이터를 변수에 저장합니다.</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanY'>setValue</span><span className='spanW'>( <span className="spanB">newText</span> );</span><span className='spanG'> // state에 저장된 setValue를 사용하여 데이터를 변경시킬수있습니다. </span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>&#125;;</span></p>
                            <br />
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanP'>return</span> <span className='spanW'>(</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;React.Fragment&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1&#62;<span className='spanW'>&#123; value &#125;</span>&#60;/h1&#62;<span className='spanG'> // 결과 : &#60;h1&#62;기본구조&#60;/h1&#62; </span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60;button <span className='spanB'>onClick</span><span className='spanW'>=</span>&#123; <span className='spanY'>textChange</span> &#125;&#62;<span className='spanW'>버튼</span>&#60;/button&#62;<span className='spanG'> // 버튼을 클릭하면 h1의 텍스트가 '텍스트변경'으로 변경됩니다. </span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/React.Fragment&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>)</span></p>
                            <p><span className='spanW'>&#125;</span></p>
                            <br />
                            <p><span className='spanP'>export default</span> <span className='spanY'>Main</span><span className='spanW'>;</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>- state는 변수를 보관하는곳 입니다.</li>
                        <li>- state가 변경되면 html이 자동으로 재랜더링 됩니다. (웹이 앱처럼 동작합니다)</li>
                        <li>- 변경될수있는 데이터들은 모두 state에 저장합니다.</li>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default Start;