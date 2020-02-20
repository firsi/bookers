import { theme } from '../../theme/theme';
const Category = ({children, title}) => {
    return(
        <div>
            <h1>{title}</h1>
            {children}
            <style jsx>{`
                color: ${theme.color.primary_dark};
                font-size: ${theme.font.small};
            `}
                
            </style>
        </div>
    )
}

export default Category;