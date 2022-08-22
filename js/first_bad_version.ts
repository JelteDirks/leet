/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: (n: number) => boolean) {
    return function(n: number): number {
        let hi = n;
        let lo = 0;
        while (lo <= hi) {
            let mid = Math.floor((lo+hi)/2);
            if (isBadVersion(mid)) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    };
};
