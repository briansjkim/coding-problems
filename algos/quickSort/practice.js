/**
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by selecting one element (the "pivot") and finding the index where the pivot should end up in the sorted array
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
 *  the runtime of quick sort depends in part on how one selects the pivot
 *  ideally, the pivot should be chosen so that it's roughly the median value
 */

function pivot(arr, start = 0, end = arr.length + 1) {

}
