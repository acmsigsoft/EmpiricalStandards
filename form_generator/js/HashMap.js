class HashMap {
	constructor() {
		this._buckets = [];
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i)) % this._buckets.length;
		}
		return hash;
	}

	set(key, value) {
		const index = this._hash(key);
		if (!this._buckets[index]) {
			this._buckets[index] = [];
		}

		const bucket = this._buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket[i][1] = value;
				return;
			}
		}

		bucket.push([key, value]);
	}

	get(key) {
		const index = this._hash(key);
		const bucket = this._buckets[index];
		if (!bucket) {
			return undefined;
		}

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				return bucket[i][1];
			}
		}

		return undefined;
	}

	remove(key) {
		const index = this._hash(key);
		const bucket = this._buckets[index];
		if (!bucket) {
			return;
		}

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket.splice(i, 1);
				return;
			}
		}
	}
}