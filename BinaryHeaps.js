class MaxBinaryHeap {
  constructor() {
    this.vlaues = [];
  }
  insert(element) {
    this.vlaues.push(element);
    // 적절한 위치 찾아가기
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.vlaues.length - 1;
    const element = this.vlaues[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      // swap
      this.values[parentIdx] = element;
      this.vlaues[idx] = parent;
      idx = parent;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.vlaues.pop();
    if (this.vlaues.length > 0) {
      // root 에 있는 값 적절한 위치 찾아주는 함수
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < lenght) {
        leftChild = this.vlaues[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.vlaues[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
