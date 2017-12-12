/* eslint-disable */
import { compose } from 'redux'

const sortByDate = field =>
    (a, b) => new Date(b[field]) - new Date(a[field])

const sortByString = field =>
    (a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ? -1 : 1

const sortByNumber = field =>
    (a, b) => b[field] - a[field]

const whichSort = (type, field) =>
    (type === "date") ?
        sortByDate(field) :
        (type === "string") ?
            sortByString(field) :
            sortByNumber(field)

export const sortFunction = sort =>
    (sort === "SORTED_BY_TITLE") ?
        whichSort("string", "title") :
        (sort === "SORTED_BY_RATING") ?
            whichSort("number", "rating") :
            whichSort("date", "timestamp")

const getSortState = (sortBy = "date",
                      stateHash = {
                          date: "SORTED_BY_DATE",
                          title: "SORTED_BY_TITLE",
                          rating: "SORTED_BY_RATING"
                      }) => stateHash[sortBy]

const getSortFunction = compose(
    sortFunction,
    getSortState
)

/**
 * @desc HOF that takes an unsorted array of color objects and a sort type string 
 *       and returns a copy of a sorted array
 * @param {Array[,{Object}]} colors - unsorted array of colors as pulled from redux store state
 * @param {String} sort - instructs how the colors array should be sorted
 * @return {Array[,{Object}]} - sorted array of colors

 * @how-it-works:
 * (1) calls helperFunction locateSortFunction with sortyBy arg (''|'title'|'rating') 
 * (2) result of locateSortFunction(sortBy) is a sort comparison function
 * that is passed to the Javscxript Array prototype sort method and 
 * called on a shallow copy of the unsorted colors
 *
 *
*/
export const sortColors = (colors, sortBy) => compose(
        fn => [...colors].sort(fn),
        getSortFunction
    )(sortBy);

//////////////

export const getFirstArrayItem = array => array[0]

export const filterArrayById = (array, id) =>
    array.filter(item => item.id === id)

export const findById = compose(
    getFirstArrayItem,
    filterArrayById
)

// so much easier to understand because
//. (1) logic is all on one line instead of needing to following multiple lines
//. (2) logic ispretty easy to understand if you know slice and filter
export const findColorById = (array, id) =>
    array.filter(item => item.id === id).slice(0,1)