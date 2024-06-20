import Node from "./node.js";

class DoublyLL {
    static #rootHead;
    static #size = 1;
    constructor(data) {
        DoublyLL.#rootHead = new Node(data);
    };

    prepend(data) {
        let node = new Node(data, DoublyLL.#rootHead);

        DoublyLL.#rootHead.prev = node;

        DoublyLL.#rootHead = node;

        DoublyLL.#size += 1;
    };

    append(data) {
        let node = DoublyLL.#rootHead;
        
        while (node.next !== null) {
            node = node.next
        };
       
        node.next = new Node(data, null, node);

        DoublyLL.#size += 1;
    };

    size() {
     
        return DoublyLL.#size;
    };

    head() {
        return DoublyLL.#rootHead;
    };

    tail() {
        let node = DoublyLL.#rootHead;

        while (node.next) {
            node = node.next
        };

        return node;
    };

    at(index) {
        let node = DoublyLL.#rootHead;
        let counter = 0;

        while (node) {
            if(index === counter) {
                return node
            };

            counter += 1;

            node = node.next;
        };

        return "Does not exist";
    };

    pop() {
        let node = DoublyLL.#rootHead;
        let prev;
        let counter = 0;


        while (node.next) {
            prev = node;

            node = node.next;
        }

        DoublyLL.#size -= 1;

        return prev.next = null;
    };

    contains(data) {
        let node = DoublyLL.#rootHead;

        while (node !== null) {
            if(node.data === data) return true;

            node = node.next;
        }

        return false;
    };

    find(data) {
        let node = DoublyLL.#rootHead;
        let counter = 0;


        while (data < DoublyLL.#size) {
            if(node.data === data) {
                
                return counter;
            };
            counter += 1;

            node = node.next;
        }

        return null;
    };

    toString() {
        let node = DoublyLL.#rootHead;
        let arrStr = [];

        while(node.next) {
            arrStr = arrStr.concat(`(${node.data}) ->`);
            node = node.next
        }

        arrStr.push(`(${node.data}) -> (${null})`);

        return arrStr.toString().replaceAll(",", " ");
    };

    insertAt(data, index) {
        let node = DoublyLL.#rootHead;
        let prev;
        let counter = 0;
        
        if(index > this.size() + 1) {
            return `last index is ${this.size() - 1} insert at index ${this.size()}`
        }

        if(index === 0) {
            node = new Node(data, DoublyLL.#rootHead);
            DoublyLL.#rootHead = node;
            DoublyLL.#size += 1;

            return true
        }

        while (node) {
            if(index === counter) {
                DoublyLL.#size += 1;
                return prev.next = new Node(data, node, prev)
            }

            counter += 1;
            prev = node;
            node = node.next;
        };

        DoublyLL.#size += 1;
        prev.next = new Node(data, null, prev);

        return true; 
    };

    removeAt(index) {
        let node = DoublyLL.#rootHead;
        let counter = 0;

        while (node) {
            if(index === counter) {

                if(node.next === null) {
                    prev.next = null
                    DoublyLL.#size -= 1;

                    return  true;
                }

                node.next.prev = prev;
                prev.next = node.next;
                DoublyLL.#size -= 1;

                return true
            };

            counter += 1;
            prev = node;
            node = node.next;
        }

        return false;
    };
};

const ll = new DoublyLL("1");
ll.prepend("0");
ll.append("2");
// console.log(ll.size());
// console.log(ll.contains("2"));
// console.log(ll.find("2"));
// console.log(ll.find("20"));
// console.log(ll.find("2"));
// console.log(ll.at(2));
// console.log(ll.pop());
// console.log(ll.toString());
// console.log(ll.size());
// console.log(ll.toString());
// console.log(ll.insertAt("new data", 10));
// console.log(ll.insertAt("new data", 3));
// console.log(ll.toString());
// console.log(ll.insertAt("new data", 0));
// console.log(ll.removeAt(2));
// console.log(ll.size());
for (let index = 3; index < 10; index++) {
    ll.append(index)
    
}

console.log(ll.toString());




