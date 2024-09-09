// @ts-nocheck
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import less from 'highlight.js/lib/languages/less.js';
import css from 'highlight.js/lib/languages/css.js';
import 'highlight.js/styles/default.css'; // 你可以选择其他样式
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('less', less);
hljs.registerLanguage('css', css);

const HighLight = ({ code, language = 'css' }: { code: string; language: string }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
};

HighLight.cssCode = (str: string) => {
  return <HighLight code={str} language="css" />;
};

export default HighLight;
