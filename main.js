let factory = document.getElementById("factory");
factory.addEventListener('pointerdown', (e) => {
    function lang() {
        let dict = ["ABAP", "ActionScript", "Ada", "Arduino", "ASP", "Assembly", "Bash", "C", "C Shell", "C#", "C++", "Clojure", "COBOL", "D", "Dart", "Delphi", "ECMAScript", "Elixir", "Erlang", "F#", "Fortran", "Go", "Groovy", "Haskell", "Java", "JavaScript", "Julia", "Kotlin", "Lisp", "Logo", "Lua", "Maple", "Mathematica", "MATLAB", "Objective-C", "Pascal", "Perl", "PHP", "PL/SQL", "PowerShell", "Prolog", "Python", "R", "Ruby", "Rust", "Scala", "Scratch", "Smalltalk", "Transact-SQL", "TypeScript"];
        let word = Math.floor(Math.random() * dict.length);
        return dict[word]
    }
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.id = "new";
    newElement.innerHTML = lang();
    document.body.append(newElement);
    function position(e) {
        newElement.style.left = e.pageX - newElement.offsetWidth / 2 + 'px';
        newElement.style.top = e.pageY - newElement.offsetHeight / 2 + 'px';
    }
    position(e);
    document.addEventListener('pointermove', position);
    newElement.addEventListener('pointerdown', (e) => {
        document.addEventListener('pointermove', position);
    });
    newElement.addEventListener('pointerup', (e) => {
        document.removeEventListener('pointermove', position);
        let order = document.getElementById("order").getBoundingClientRect();
        let chaos = document.getElementById("chaos").getBoundingClientRect();
        let trash = document.getElementById("trash").getBoundingClientRect();
        if ((e.pageX >= order.left && e.pageX <= order.right) && (e.pageY >= order.top && e.pageY <= order.bottom)) {
            newElement.style.position = 'static';
            document.getElementById("order").append(newElement);
        } else if ((e.pageX >= chaos.left && e.pageX <= chaos.right) && (e.pageY >= chaos.top && e.pageY <= chaos.bottom)) {
            document.getElementById("chaos").append(newElement);
        }  else if ((e.pageX >= trash.left && e.pageX <= trash.right) && (e.pageY >= trash.top && e.pageY <= trash.bottom)) {
            newElement.remove();
        }
    });
});