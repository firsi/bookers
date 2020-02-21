import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core"
import { theme } from '../theme/theme'
import BookStatusDialog from "./BookStatusDialog"
import Router  from "next/router"

const useStyles = makeStyles({
    error: {
        margin: 'auto',
        color: 'red',
        fontSize: theme.font.very_small,
    },
    table: {
        width: '100%',
        marginTop: '1.5em',
        borderCollapse: 'collapse',
        fontSize: '0.8em',
        "& td": {
            maxWidth: '100px',
            overflow:' hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            paddingRight: '1em',
            height: '40px',       
        },
        
    },
    title: {
        color: theme.color.primary_very_light,
    },
    row: {
        borderBottom: `1px solid ${theme.color.secondary}`,
    }
})

const BookDataTable = ({data, error}) => {
    const classes = useStyles();

    const handleClick = (id) => {
        Router.push(`/book/${id}`)
    }
    const renderTableRow = (book) => {     
        return (
            <tr className={classes.row} key={book.id} >
                <td className={classes.title} onClick={() => handleClick(book.id)} >
                    {book?.bookInfo?.title}
                </td>
                <td>{book?.bookInfo?.authors}</td>
                {/* <td>{new Date(book?.bookInfo?.addedAt)} </td> */}
                <td>
                    <BookStatusDialog book={book} />
                </td>
            </tr>
        )
    }
    return(
        <>
            {error && 
                <div className={classes.error} >
                    <span>Something went wrong! Please, refresh and try again!</span>
                </div>
            }
            <table className={classes.table}>
                <tbody>
                    {data.map(book => 
                        renderTableRow(book)
                    )}
                </tbody>
                
            </table>
        </>
    )
}

const mapStateToProps = (state) => ({
    error: state.saveBook.error
})

export default connect(mapStateToProps)(BookDataTable);