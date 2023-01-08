/*
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
*/

function treeByLevels(rootNode) {
    const innerTreeByLevels = (node => {
        if (node == null) return [{ depth: 0, v: null }];
        if (node.left == null && node.right == null) return [{ depth: 0, v: node.value }];

        let leftChildren = innerTreeByLevels(node.left);
        let rightChildren = innerTreeByLevels(node.right);

        let ret = [];
        if (leftChildren[0].depth == rightChildren[0].depth) {
            ret.push({ depth: leftChildren[0].depth + 1, v: node.value });
        }
        if (leftChildren[0].depth > rightChildren[0].depth) {
            ret.push({ depth: leftChildren[0].depth + 1, v: node.value });
            let depthDiff = leftChildren[0].depth - rightChildren[0].depth;
            rightChildren = rightChildren.map(el => {
                el.depth += depthDiff;
                return el;
            });
        }
        if (leftChildren[0].depth < rightChildren[0].depth) {
            ret.push({ depth: rightChildren[0].depth + 1, v: node.value });
            let depthDiff = rightChildren[0].depth - leftChildren[0].depth;
            leftChildren = leftChildren.map(el => {
                el.depth += depthDiff;
                return el;
            });
        }
        return ret.concat(leftChildren, rightChildren);
    });

    let treeArr = innerTreeByLevels(rootNode);
    let ans = [];
    let deepest = treeArr[0].depth;
    while (deepest > -1) {
        ans = ans.concat(treeArr.filter(el => el.depth == deepest).map(el => el.v));
        deepest--;
    }
    return ans.filter(el => el != null);
}
