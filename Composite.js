class FileComponent {
    constructor(name) {
        this.name = name;
    }

    add() {}

    remove() {}

    getSize() {}
}
class TextFile extends FileComponent {
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

class VideoFile extends FileComponent {
    constructor(name, size, duration) {
        super(name);
        this.size = size;
        this.duration = duration;
    }

    getSize() {
        return this.size;
    }
}

class AudioFile extends FileComponent {
    constructor(name, size, length) {
        super(name);
        this.size = size;
        this.length = length;
    }

    getSize() {
        return this.size;
    }
}
class Folder extends FileComponent {
    constructor(name) {
        super(name);
        this.files = [];
    }

    add(file) {
        this.files.push(file);
    }

    remove(file) {
        const index = this.files.indexOf(file);
        if (index !== -1) {
            this.files.splice(index, 1);
        }
    }

    getSize() {
        let totalSize = 0;
        for (const file of this.files) {
            totalSize += file.getSize();
        }
        return totalSize;
    }
}
