class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let n = lists.length;
  let first = new ListNode(0, null);
  let heap = new MinHeap();
  let advanced = true;
  let tail = first;
  for (let i = 0 ; i < n; i++) {
    let cur = lists[i];
    if (cur === null) {
      continue;
    }
    console.log(cur);
    lists[i] = cur.next;
    heap.insert({ node: cur, src: i, });
  }

  while (advanced) {
    advanced = false;
    for (let i = 0 ; i < n ; i++) {
      let cur = lists[i];
      if (cur === null) {
        continue;
      }
      advanced = true;
      lists[i] = cur.next;
      cur.next = null;

      let min: HeapNode | null = heap.extract_insert({
        node: cur,
        src: i,
      });

      if (min) {
        tail.next = min.node;
        tail = tail.next;
      }

    }
  }
  return first.next;
};

type HeapNode = {
  node: ListNode;
  src: number;
}

class MinHeap {
  size: number;
  capacity: number;
  data: Array<HeapNode>;

  constructor() {
    this.size = 0;
    this.capacity = 2;
    this.data = new Array(2);
  }

  // insert new node
  insert(v: HeapNode): void {
    if (this.capacity + 1 < this.data.length) {
      let _data: Array<HeapNode> = new Array(this.capacity + Math.floor(Math.sqrt(this.size)));
      let i = 0;
      while (!!this.data[i]) {
        _data[i] = this.data[i];
        i++;
      }
      this.data = _data;
      this.capacity = _data.length;
    }
    this.data[this.size] = v;
    this.size += 1;
    this.heap_up();
  }

  heap_up() {
    let cur = this.size - 1;
    let parent = MinHeap.parent(cur);
    while (parent >= 0 && this.data[parent].node.val > this.data[cur].node.val) {
      swap(this.data, parent, cur);
      cur = parent;
      parent = MinHeap.parent(parent);
    }
  }

  has_left(i: number) {
    return MinHeap.left(i) < (this.size - 1);
  }
  
  has_right(i: number) {
    return MinHeap.right(i) < (this.size - 1);
  }

  heap_down() {
    let cur = 0;
    while (this.has_left(cur)) {
      let left = MinHeap.left(cur);
      let smallest = left;

      if (this.has_right(cur)) {
        let right = MinHeap.right(cur);
        if (this.data[right].node.val < this.data[left].node.val) {
          smallest = right;
        }
      }

      if (this.data[cur].node.val < this.data[smallest].node.val) {
        return;
      }

      swap(this.data, smallest, cur);
      cur = smallest;
    }
  }

  peek(): HeapNode | undefined {
    return this.data[0];
  }

  peek_content(): Array<HeapNode> {
    return this.data;
  }

  static left(i: number) {
    return i * 2 + 1;
  }

  static right(i: number) {
    return i * 2 + 2;
  }

  static parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  // extract the min 
  extract_min(): HeapNode | null {
    if (this.size === 0) {
      return null;
    }
    let min = this.data[0];
    swap(this.data, this.size - 1, 0);
    this.heap_down();
    this.size -= 1;
    delete this.data[this.size];
    return min;
  }

  // extract the min and push a new (balance only once)
  extract_insert(v: HeapNode): HeapNode | null{
    if (this.size === 0) {
      this.insert(v);
    }
    let min = this.data[0];
    this.data[0] = v;
    this.heap_down();
    return min;
  }
}

function swap(A: Array<any>, i: number, j: number) {
  let tmp = A[i];
  A[i] = A[j];
  A[j] = tmp;
}

// =================== BREAKPOINT

let x = new MinHeap();
let a = [
  [2,4],
  [100,1],
  [69,2],
  [88,7],
  [6,3],
  [1,2],
  [51,5],
  [84,9],
];

for (let i = 0 ; i < a.length; i++) {
  let [val, src] = a[i];
  x.insert({
    node: new ListNode(val, null),
    src,
  });
}
x.extract_insert({
  node: new ListNode(33, null),
  src: 2,
});
x.extract_insert({
  node: new ListNode(1, null),
  src: 2,
});
x.extract_insert({
  node: new ListNode(8, null),
  src: 2,
});
x.extract_insert({
  node: new ListNode(99, null),
  src: 2,
});
x.extract_insert({
  node: new ListNode(26, null),
  src: 2,
});

console.log(x.peek_content().filter(e => !!e));

let cur = x.extract_min();
while (!!cur) {
  console.log(cur.node.val);
  cur = x.extract_min();
}
