const changetheme = (theme) => {
    document.getElementsByTagName("body")[0].style.setProperty("--primary",theme === '1' ? "#3497c5" 
    : theme === '2' ? '#b95062' 
    : theme === '3' ? "#45b369" 
    : "#fff");

    document.getElementsByTagName("body")[0].style.setProperty("--secondary",theme === '1' ? "#30636B" 
    : theme === '2' ? '#9e4150' 
    : theme === '3' ? "#389758" 
    : "#fff");

    document.getElementsByTagName("body")[0].style.setProperty("--tertiary",theme === '1' ? "#2c3e50" 
    : theme === '2' ? '#64242f' 
    : theme === '3' ? "#1f5e35" 
    : "#fff");
}
export default changetheme