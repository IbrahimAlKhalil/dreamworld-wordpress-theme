export default function (arrLike: ArrayLike<any>): any[] {
    return Array.prototype.slice.call(arrLike, 0);
}