import React from 'react';

function Editor({ text }) {
  return (
    <section className="editor">
      <h3>Publique Algo</h3>
      <form>
        <textarea rows="5" value={text} />
        <button type="submit">Publicar</button>
      </form>
    </section>
  )
}

export default Editor;
