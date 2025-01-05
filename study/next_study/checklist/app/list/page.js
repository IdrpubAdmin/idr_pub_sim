export default function List(){
  return (
    <div>
      <div>반갑다</div>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용"/>
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}