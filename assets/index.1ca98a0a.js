var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,i=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&a(e,n,t[n]);return e};import{O as c,i as d,a as l,z as u}from"./vendor.75ce5d53.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var m,p;function g(e,t){const n=t.length-e.childNodes.length;if(n>0)for(let r=0;r<n;r++){const t=document.createElement("li");e.appendChild(t)}else if(n<0)for(let r=n;r<0&&e.lastChild;r++)e.removeChild(e.lastChild);for(let r=0,s=t.length;r<s;r++)e.childNodes.item(r).textContent=t[r]}c.setOptions({translations:{warnings:{straightRow:"キーボードの連続したキーの並びは推測されやすいです",keyPattern:"短いキーパターンは推測されやすいです",simpleRepeat:'"aaa"のような同じ文字の繰り返しは推測されやすいです',extendedRepeat:'"abcabcabc"のような文字パターンの繰り返しは推測されやすいです',sequences:'"abc"のようなよく使われる文字列は推測されやすいです',recentYears:"年は推測されやすいです",dates:"日付は推測されやすいです",topTen:"非常に頻繁に利用されるパスワードです",topHundred:"頻繁に利用されるパスワードです",common:"利用されることの多いパスワードです",similarToCommon:"よく利用されるパスワードです",wordByItself:"1単語だけだと推測されやすいです",namesByThemselves:"名前だけだと推測されやすいです",commonNames:"一般的な名前は推測されやすいです",userInputs:"入力した情報に関係する文字列は含めないでください"},suggestions:{l33t:'"a"を"@"に変えるような、文字を記号で置き換えるのは避けましょう',reverseWords:"よく使われる単語を逆に書くのは避けましょう",allUppercase:"すべて大文字にするのは避けましょう",capitalization:"先頭の文字以外にも大文字を混ぜましょう",dates:"あなたに関する年や日付を含めないようにしましょう",recentYears:"年を含めないようにしましょう",associatedYears:"あなたに関する年を含めないようにしましょう",sequences:"よく使われる文字列を含めないようにしましょう",repeated:"文字や単語を繰り返さないようにしましょう",longerKeyboardPattern:"長いキーパターンを使い、途中で何回かパターンの方向を変えましょう",anotherWord:"あまり使われない単語をもっと含めましょう",useWords:"よく使われる文章を避けつつ、複数の単語を含めましょう",noNeed:"記号や数字、大文字を混ぜなくても推測されにくいパスワードは作れます"},timeEstimation:{ltSecond:"1秒未満",second:"{base}秒",seconds:"{base}秒",minute:"{base}分",minutes:"{base}分",hour:"{base}時間",hours:"{base}時間",day:"{base}日",days:"{base}日",month:"{base}ヶ月",months:"{base}ヶ月",year:"{base}年",years:"{base}年",centuries:"数百年"}},graphs:d.adjacencyGraphs,dictionary:(m=i(i({},d.dictionary),l.dictionary),p={japanese:["hoge","fuga","piyo"]},t(m,n(p)))}),function(e){const t=document.getElementById("warning"),n=document.getElementById("suggestions"),r=document.getElementById("warning_label"),s=document.getElementById("suggestions_label"),o=document.getElementById("score_indicator"),a=document.getElementById("score_text");e.addEventListener("input",(e=>{const{value:i}=e.currentTarget,c=String(i),{feedback:d,score:l}=u(c);g(t,d.warning?[d.warning]:[]),g(n,d.suggestions);const m=d.warning?1:0,p=d.suggestions.length;r.textContent=`警告 (${m})`,s.textContent=`推奨 (${p})`,o.setAttribute("data-score","*".repeat(l+1)),a.textContent=function(e){switch(e){case 0:return"非常に簡単に推測可能 (score=0)";case 1:return"簡単に推測可能 (score=1)";case 2:return"ある程度推測可能 (score=2)";case 3:return"ある程度安全 (score=3)";case 4:return"とても安全 (score=4)";default:return`--- (score=${e})`}}(l)}))}(document.getElementById("input"));