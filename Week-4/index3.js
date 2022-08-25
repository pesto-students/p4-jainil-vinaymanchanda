const STATES = {
    PENDING: "pending",
    FULLFILLED: "fullfilled",
    REJECTED: "rejected",
  };
  
  function MyPromise(cb) {
    this.value = undefined;
    this.state = STATES.PENDING;
    let thenCbs = [];
    let catchCbs = [];
    let runCallBacks = function () {
      if (this.state === STATES.FULLFILLED) {
        thenCbs.forEach((callback) => {
          callback(this.value);
        });
        thenCbs = [];
      }
      if (this.state === STATES.REJECTED) {
        catchCbs.forEach((callback) => {
          callback(this.value);
        });
        catchCbs = [];
      }
    };
    let onSuccess = function (value) {
      if (this.state !== STATES.PENDING) return;
      this.value = value;
      this.state = STATES.FULLFILLED;
      runCallBacks.bind(this)();
    };
    let onFail = function (value) {
      if (this.state !== STATES.PENDING) return;
      if (catchCbs.length === 0) {
        throw new Error("Unhanled promise rejection error");
      }
      this.value = value;
      this.state = STATES.REJECTED;
      runCallBacks.bind(this)();
    };
    let bindedOnSuccess = onSuccess.bind(this);
    let bindedOnFail = onFail.bind(this);
  
    this.then = function (thenCb, catchCb) {
      return new MyPromise(function (resolve, reject) {
        thenCbs.push((result) => {
          if (!thenCb) {
            resolve(result);
            return;
          }
          try {
            resolve(thenCb(result));
          } catch (error) {
            reject(error);
          }
        });
  
        catchCbs.push((result) => {
          if (!catchCb) {
            reject(result);
            return;
          }
          try {
            resolve(catchCb(result));
          } catch (error) {
            reject(error);
          }
        });
      });
    };
  
    this.catch = function (cb) {
      return this.then(undefined, cb);
    };
    cb(bindedOnSuccess, bindedOnFail);
  }
  
  const getNumber = () => {
    const n = Math.floor(Math.random() * 10);
    console.log(`number is - ${n}`);
    const p = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        if (n % 5 === 0) {
          resolve("number is divisible by 5");
        } else {
          reject("number is not divisible by 5");
        }
      }, 1000);
    });
  
    p.then((v) => {
      console.log("first callback");
      console.log(v);
      return 2;
    })
      .then((v) => {
        console.log("second callback");
        console.log(v);
        return 3;
      })
      .then((v) => {
        console.log("third callback");
        console.log(v);
        return 4;
      })
      .catch((err) => {
        console.log(err);
        return 23;
      })
      .then((val) => {
        console.log("then after catch ");
        console.log(val);
      });
  };
  
  getNumber();