import React from 'react';

const Install = () => {
    return (
        <>
            <section className='install'>
                <h3>리액트 설치</h3>
                <article>
                    <h4>CDN링크</h4>
                    <div className='codeCnt'>
                        <code>
                            <p>&#60;<span>script </span><span className='spanB'>crossorigin src</span><span className='spanW'>=</span><span className='spanR'>"https://unpkg.com/react@17/umd/react.development.js"</span>&#62;&#60;/script&#62;</p>
                            <p>&#60;<span>script </span><span className='spanB'>crossorigin src</span><span className='spanW'>=</span><span className='spanR'>"https://unpkg.com/react-dom@17/umd/react-dom.development.js"</span>&#62;&#60;/script&#62;</p>
                            <p>&#60;<span>script </span><span className='spanB'>src</span><span className='spanW'>=</span><span className='spanR'>"https://unpkg.com/babel-standalone@6/babel.min.js"</span>&#62;&#60;/script&#62;</p>
                        </code>
                    </div>
                    <ul>
                        <li>1. 위의 스크립트 코드를 입력합니다.</li>
                        <li>- CDN을 통해 리액트를 사용한다면, <b>crossorigin</b> 어트리뷰트(attribute)와 함께 사용하는 것을 권장한다고 공식문서에 적혀있습니다.</li>
                        <li>- 리액트에서는 <b>jsx</b>라는 <b>Javascript</b>에 <b>XML</b>을 추가한 문법을 사용합니다.</li>
                        <li>- <b>jsx</b>를 읽을수있게 하려면 바벨이 필요합니다.</li>
                    </ul>
                </article>
                <article>
                    <h4>creacte-react-app 설치</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanW'>npx creacte-react-app 폴더명</span><span className='spanG'> // 필요한 모든 파일을 한번에 설치해주는 라이브러리</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>1. <b>Node.js</b>를 설치합니다.</li>
                        <li>2. 위 코드를 터미널에 입력합니다.</li>
                        <li>3. 폴더명으로 사용할 이름을 작명해 폴더명 자리에 적어주시면됩니다.</li>
                        <li>- <b>App.js</b>가 메인페이지가 됩니다.</li>
                        <li>- <b>npm start</b> 명령어로 파일을 실행시키면됩니다. (미리보기)</li>
                    </ul>
                </article>
                <article>
                    <h4>리액트 설치</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanW'>npm init</span><span className='spanG'> // package.json파일을 생성해줍니다. (버전관리를 쉽게해줌)</span></p>
                            <p><span className='spanW'>npm i react react-dom</span><span className='spanG'> // 리액트와 리액트돔을 설치해줍니다.</span></p>
                            <p><span className='spanW'>npm i -D webpack webpack-cli</span><span className='spanG'> // 웹팩과 웹팩cli를 설치해줍니다.</span></p>
                            <p><span className='spanW'>npm i -D @babel/core</span><span className='spanG'> // 바벨을 설치해줍니다.</span></p>
                            <p><span className='spanW'>npm i -D @babel/preset-env</span><span className='spanG'> // 최신문법을 옛날문법으로 바꿔주는 바벨플러그인 입니다.</span></p>
                            <p><span className='spanW'>npm i -D @babel/preset-react</span><span className='spanG'> // jsx를 알아듣게하는 바벨플러그인 입니다.</span></p>
                            <p><span className='spanW'>npm i -D babel-loder</span><span className='spanG'> // 웹팩과 바벨을 연결해줍니다.</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>1. <b>Node.js</b>를 설치합니다.</li>
                        <li>2. 위 코드를 터미널에 입력합니다.</li>
                        <li>3. <b>index.html</b> 파일을 생성해 다음과같이 작성합니다.</li>
                    </ul>
                    <div className='codeCnt'>
                        <code>
                            <p>&#60;body&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&#60;div&#62; <span className='spanB'>id</span><span className='spanW'>=</span><span className="spanR">"root"</span>&#60;/div&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&#60;<span>script </span><span className='spanB'>src</span><span className='spanW'>=</span><span className='spanR'>"./dist/app.js"</span>&#62;&#60;/script&#62;</p>
                            <p>&#60;/body&#62;</p>
                        </code>
                    </div>
                    <ul>
                        <li>4. <b>client.jsx</b> 파일을 생성해 다음과같이 작성합니다.</li>
                    </ul>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanP'>import</span> <span className='spanB'>React</span> <span className='spanP'>from</span> <span className='spanR'>'react'</span><span className='spanG'> // 리액트를 연결합니다.</span></p>
                            <p><span className='spanP'>import</span> <span className='spanB'>ReactDOM</span> <span className='spanP'>from</span> <span className='spanR'>'react-dom/client'</span><span className='spanG'> // 리액트돔을 연결합니다.</span></p>
                            <p><span className='spanP'>import</span> <span className='spanB'>Main</span> <span className='spanP'>from</span> <span className='spanR'>'./Main'</span><span className='spanG'> // 메인컴포넌트와 연결합니다.</span></p>
                            <br />
                            <p>const <span className='spanB'>rootNode</span> <span className='spanW'>=</span> <span className='spanB'>document</span><span className='spanW'>.</span><span className='spanY'>getElementById</span><span className='spanW'>( </span><span className="spanR">'root'</span><span className='spanW'> ) ;</span></p>
                            <br />
                            <p><span className='spanB'>ReactDOM</span><span className='spanW'>.</span><span className='spanY'>createRoot</span><span className='spanW'>( </span><span className='spanB'>rootNode</span><span className='spanW'> ) .</span><span className="spanY">render</span><span className='spanW'> ( </span>&#60;Main /&#62;<span className='spanW'> ) ;</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>5. <b>webpack.config.js</b> 파일을 생성해 다음과같이 작성합니다.</li>                        
                    </ul>
                    <div className='codeCnt'>
                        <code>
                            <p>const <span className='spanB'>path</span> <span className='spanW'>=</span> <span className='spanY'>require</span><span className='spanW'>( </span><span className="spanR">'path'</span><span className='spanW'> ) ;</span><span className='spanG'> // Node에 내장되어있는 path를 연결합니다.</span></p>
                            <br />
                            <p><span className="spanP">module<span className='spanW'>.</span><span className="spanP">exports</span></span> <span className='spanW'>= &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanB'>name:</span> <span className='spanR'>'react-setting'</span><span className='spanW'>,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanB'>mode:</span> <span className='spanR'>'development'</span><span className='spanW'>,</span><span className='spanG'> // 실서비스: porduction</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanB'>devtool:</span> <span className='spanR'>'eval'</span><span className='spanW'>,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanB'>resolve:</span> <span className='spanR'></span><span className='spanW'>&#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>extensions:</span> <span className='spanW'>&#91; </span><span className='spanR'>'.js'<span className='spanW'>,</span>'.jsx'</span><span className='spanW'> &#93;,</span><span className='spanG'> // 받아올 파일들의 확장자명을 적어줍니다.</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>&#125;,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanB'>entry:</span> <span className='spanR'></span><span className='spanW'>&#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>app:</span> <span className='spanW'>&#91; </span><span className='spanR'>'./client'</span><span className='spanW'> &#93;,</span><span className='spanG'> // 받아올 jsx파일명을 적어줍니다.</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>&#125;,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanB'>module:</span> <span className='spanR'></span><span className='spanW'>&#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>rules:</span> <span className='spanW'>&#91;&#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>test:</span> <span className='spanR'>/\.jsx?/</span><span className='spanW'>,</span><span className='spanG'> // 규칙을 적용할 파일들을 적어줍니다. \는 백 슬래시입니다.</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>loader:</span> <span className='spanR'>'babel-loader'</span><span className='spanW'>,</span><span className='spanG'> // 바벨을 적용시킵니다.</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>options:</span> <span className='spanW'>&#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>presets:</span> <span className='spanW'>&#91; </span><span className='spanR'>'@babel/preset-env'<span className='spanW'>,</span> '@babel/preset-react'</span><span className='spanW'> &#93;,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanW'>&#125;,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanW'>&#125;&#93;,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>&#125;,</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanB'>output:</span> <span className='spanW'>&#91;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>path:</span> path<span className='spanW'>.<span className='spanY'>join</span>( <span className="spanB">__dirname</span> , <span className="spanR">'dist'</span> ) </span><span className='spanG'> // 경로를 합칩니다. (현재폴더경로, 안에있는 dist폴더)</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>filename:</span> <span className='spanR'>'app.js'</span><span className='spanG'> // 파일들을 합쳐 app.js파일을 만듭니다.</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanB'>publicPath:</span> <span className='spanR'>'/dist'</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>&#93;,</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>- 웹팩은 많은 <b>jsx</b>파일들을 하나로 합쳐주는 역할을 합니다.</li>                        
                        <li>- 컴포넌트가 많아지면 하나의 파일에서 관리하기 어렵기 때문에 여러개로 쪼개는것이 좋은데, 이를위해 웹팩이 필요합니다.</li>                        
                        <li>- 웹팩은 기본적으로 <b>entry</b>에서 입력받아온 값들에게 <b>module</b>을 적용하여 <b>output</b>으로 출력시키는 동작을합니다.</li>                        
                    </ul>
                </article>
            </section>
        </>
    )
}

export default Install;