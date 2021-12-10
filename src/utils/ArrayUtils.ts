import moment from "moment";

class ArrayUtils {
    // sort array by createdAt using moment
    public sortByCreatedAt(array: any[]) {
        return array.sort((a, b) => {
            const dateA = moment(a.createdAt);
            const dateB = moment(b.createdAt);
            return dateA.isBefore(dateB) ? 1 : -1;
        });
    }
}

export default new ArrayUtils();