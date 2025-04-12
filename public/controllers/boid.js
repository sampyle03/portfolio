function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.37;
        this.maxSpeed = 1.9;
    }

    edges() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    align(boids){
        let perceptionRadius = getRandomInt(15, 30);;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (d < perceptionRadius && other != this) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohesian(boids){
        let perceptionRadius = getRandomInt(1, 30);;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (d < perceptionRadius && other != this) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed + (getRandomInt(-12, 35)/10));
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    seperation(boids){
        let perceptionRadius = getRandomInt(7, 30);;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (d < perceptionRadius && other != this) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(d * d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }


    flock(boids) {
        let alignment = this.align(boids).mult(0.5);
        let cohesian = this.cohesian(boids).mult(0.3);
        let seperation = this.seperation(boids).mult(0.5);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesian);
        this.acceleration.add(seperation);
    }

    avoidEdgeOfScreen(){
        let desired = null;
        let d = getRandomInt(-6,14);
        if (this.position.x < d) {
            desired = createVector(this.maxSpeed, this.velocity.y);
        } else if (this.position.x > width - d) {
            desired = createVector(-this.maxSpeed, this.velocity.y);
        }

        if (this.position.y < d) {
            desired = createVector(this.velocity.x, this.maxSpeed);
        } else if (this.position.y > height - d) {
            desired = createVector(this.velocity.x, -this.maxSpeed);
        }

        if (desired !== null) {
            desired.setMag(this.maxSpeed);
            let steer = p5.Vector.sub(desired, this.velocity);
            steer.limit(this.maxForce + 0.1);
            this.acceleration.add(steer);
        }
    }

    // avoid cursor
    avoidCursor(cursor){
        let desired = null;
        let d = dist(this.position.x, this.position.y, cursor.x, cursor.y);
        if (d < 55) {
            desired = p5.Vector.sub(this.position, cursor);
            if (desired !== null) {
                desired.setMag(this.maxSpeed+9);
                let steer = p5.Vector.sub(desired, this.velocity);
                steer.limit(20);
                this.acceleration.add(steer);
            }
        }
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    show() {
        strokeWeight(8);
        stroke(248, 124, 88);
        point(this.position.x, this.position.y);
    }

}