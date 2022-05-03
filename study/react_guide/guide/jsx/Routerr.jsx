import React from 'react';

const Routerr = () => {
    return (
        <>
            <section className='install'>
                <h3>리액트 라우터</h3>
                <article>
                    <h4>라우터 설치</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanW'>npm i react-router</span></p>
                            <p><span className='spanW'>npm i react-router-dom</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>- 위 코드를 터미널에 입력합니다.</li>
                        <li>- 리액트에서의 페이지 이동 기능을 리액트 라우터를 통해 처리할수있습니다.</li>
                    </ul>     
                </article>
                <article>
                    <h4>라우터의 기본구조</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanW'><span className='spanP'>import</span> &#123; <span className='spanB'>BrowserRouter</span>, <span className='spanB'>Route</span>, <span className='spanB'>Routes</span>, <span className='spanB'>Link</span> &#125; <span className='spanP'>from</span> <span className='spanR'>'react-router-dom'</span>;</span></p>
                            <br />
                            <p>const <span className='spanY'>Main</span> <span className='spanW'>= ( ) =&#62; &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanP'>return</span> <span className='spanW'>(</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;BrowserRouter&#62;<span className='spanG'> // 라우터의 종류는 크게 BrowserRouter와 HashRouter 두가지가 있습니다</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Link <span className='spanB'>to</span><span className='spanW'>=</span><span className='spanR'>"/"</span>&#62;&#60;/Link&#62;<span className='spanG'> // Link는 a태그 역할을 합니다</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Link <span className='spanB'>to</span><span className='spanW'>=</span><span className='spanR'>"/이동할경로"</span>&#62;&#60;/Link&#62;<span className='spanG'> // to안에는 이동할 경로를 넣으면 되는데 아무것도 넣지않고 /만 적으면 메인컴포넌트로(홈) 이동하게합니다</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Routes&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Route <span className='spanB'>path</span><span className='spanW'>=</span><span className='spanR'>"/"</span> <span className='spanB'>element</span><span className='spanW'>=</span>&#60;보여질컴포넌트 /&#62; /&#62;<span className='spanG'> // 경로가 일치하면 보여질 컴포넌트를 연결합니다</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Route <span className='spanB'>path</span><span className='spanW'>=</span><span className='spanR'>"/이동할경로"</span> <span className='spanB'>element</span><span className='spanW'>=</span>&#60;보여질컴포넌트 /&#62; /&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/Routes&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/BrowserRouter&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>)</span></p>
                            <p><span className='spanW'>&#125;</span></p>
                            <br />
                            <p><span className='spanP'>export default</span> <span className='spanY'>Main</span><span className='spanW'>;</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>1. BrowserRouter, Route, Routes, Link를 불러옵니다</li>
                        <li>- BrowserRouter는 브라우저 주소를 감지하고 HashRouter는 해시 주소를 감지합니다</li>
                        <li>2. 페이지 경로를 이동시키는 Link태그를 만듭니다</li>
                        <li>3. 경로가 이동되었을때 보여지는 컴포넌트를 Route태그로 만듭니다</li>
                    </ul>     
                </article>
            </section>
        </>
    )  
}

export default Routerr;