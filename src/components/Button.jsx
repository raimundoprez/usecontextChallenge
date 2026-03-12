import {ThemeValues, useTheme} from "../themes/ThemeContext";

function Button() {
    const {theme, setTheme} = useTheme();

    const nextTheme = (theme + 1) % ThemeValues.length;
    const nextThemeName = ThemeValues[nextTheme];

    function handleClick() {
        setTheme(nextTheme);
    }

    return (
        <button onClick={handleClick}>
            Cambiar al modo {nextThemeName}
        </button>
    );
}

export default Button;