// 二叉树

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

const root = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
    },
    right: {
      value: 'E',
    },
  },
  right: {
    value: 'C',
    right: {
      value: 'F',
    },
  },
};

// 前序
function f1(root) {
  if (root == null) return;

  console.log(root.value);
  f1(root.left);
  f1(root.right);
}

console.log('前序遍历');
f1(root);

// 中序
function f2(root) {
  if (root == null) return;

  f1(root.left);
  console.log(root.value);
  f1(root.right);
}

console.log('中序遍历');
f2(root);

// 后续
function f3(root) {
  if (root == null) return;

  f1(root.left);
  f1(root.right);
  console.log(root.value);
}

console.log('后序遍历');
f3(root);

const str1 = 'ABDEFC';
const str2 = 'BDEACF';
const str3 = 'BDECFA';
// 根据前中还原二叉树

function demo1(str1: string, str2: string) {
  if (str1.length === 0 || str2.length === 0) return;
}

// 根据中后还原二叉树

// 深度优先搜索

// 广度优先搜索
