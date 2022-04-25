import React from 'react';

const Grammar = () => {
    return (
        <>
            <section className='install'>
                <h3>리액트 문법</h3>
                <article>
                    <h4>MAP</h4>
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
            </section>
        </>
    )
}

export default Grammar;