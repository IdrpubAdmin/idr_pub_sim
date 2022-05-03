import PropTypes from "prop-types";
import React from 'react';


const Grammar = (htmlCode) => {
    return (
        <>
            <section className='install'>
                <h3>리액트 문법</h3>
                <article>
                    <h4>컴포넌트</h4>
                    <div className='codeCnt'>
                        <code>
                            <p><span className='spanP'>import</span> <span className='spanB'>React</span> <span className='spanP'>from</span> <span className='spanR'>'react'</span></p>
                            <p><span className='spanP'>import</span> <span className='spanB'>Header</span> <span className='spanP'>from</span> <span className='spanR'>'./경로'</span></p>
                            <p><span className='spanP'>import</span> <span className='spanB'>Contents</span> <span className='spanP'>from</span> <span className='spanR'>'./경로'</span></p>
                            <p><span className='spanP'>import</span> <span className='spanB'>Footer</span> <span className='spanP'>from</span> <span className='spanR'>'./경로'</span></p>
                            <br />
                            <p>const <span className='spanY'>Main</span> <span className='spanW'>= ( ) =&#62; &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanP'>return</span> <span className='spanW'>(</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;React.Fragment&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Header /&#62;<span className="spanG"> // 헤더 컴포넌트</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Contents /&#62;<span className="spanG"> // 컨텐츠 컴포넌트</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Footer /&#62;<span className="spanG"> // 푸터 컴포넌트</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/React.Fragment&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>)</span></p>
                            <p><span className='spanW'>&#125;</span></p>
                            <br />
                            <p><span className='spanP'>export default</span> <span className='spanY'>Main</span><span className='spanW'>;</span></p>
                        </code>
                    </div>
                    <ul>
                        <li>- 컴포넌트가 많아지면 하나의 파일에서 관리하기 힘들기 때문에 여러개로 쪼개는것이 좋습니다. (이 과정 때문에 웹팩이 필요합니다)</li>
                        <li>- 컴포넌트는 첫번째 문자를 대문자로 작명합니다.</li>
                    </ul>     
                </article>
                <article>
                    <h4>map</h4>
                    <div className='codeCnt'>
                        <code>
                            <p>&#60;ul&#62;</p>
                            <p>&nbsp;&nbsp;&nbsp;&#123;<span className='spanW'>[ <span className='spanR'>'A'</span>, <span className='spanR'>'B'</span>, <span className='spanR'>'C'</span> ]</span><span className='spanW'>.<span className='spanY'>map</span>(( <span className="spanB">v</span> ) =&#62; &#123;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanP'>return</span> <span className='spanW'>(</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;li <span className='spanW'><span className='spanB'>key</span>=</span>&#123; <span className="spanB">v</span> &#125;&#62;<span className='spanW'>&#123; v &#125;</span>&#60;/li&#62;<span className='spanG'> // 결과 : &#60;li&#62;A&#60;/li&#62;&#60;li&#62;B&#60;/li&#62;&#60;li&#62;C&#60;/li&#62;</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='spanW'>);</span></p>
                            <p>&nbsp;&nbsp;&nbsp;<span className='spanW'>&#125;)</span>&#125;</p>
                            <p>&#60;/ul&#62;</p>                    
                        </code>
                    </div>
                    <ul>
                        <li>- 리액트에서 반복문은 map을 사용합니다</li>
                    </ul>     
                </article>
                <article>
                    <h4>if문</h4>
                    <div className='codeCnt'>
                        <code>
                            <p>&#123; <span className="spanB">조건 <span className="spanW">?</span> 참일경우 실행할 내용 <span className="spanW">:</span> 거짓일경우 실행할 내용</span> &#125;</p>
                        </code>
                    </div>
                    <ul>
                         <li>- 리액트에서 if문은 삼항연산자를 사용합니다</li>
                    </ul>     
                </article>
                <article>
                    <h4>props</h4>
                    <div className='codeCnt'>
                        <code>
                            <p>&#123; txt = "안녕하세요" &#125;</p>
                        </code>
                    </div>
                    <ul>
                         <li>- props는 부모컴포넌트에서 자식컴포넌트로 값을 전달할때 사용합니다.</li>
                         <li>- props는 자식컴포넌트에서 수정할수없습니다.</li>
                         <li>- 문자열을 전달할때에는 "" 큰따옴표를 사용하고 문자열 외의값을 전달할때에는 &#123; &#125;중괄호를 사용합니다</li>
                    </ul>     
                </article>
            </section>
        </>
    )
}

Grammar.prototype = {
    htmlCode:PropTypes.object.isRequired,
}

export default Grammar;