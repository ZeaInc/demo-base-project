import { GLRenderer, Scene, Vec3 } from "@zeainc/zea-engine";

const scene = new Scene();
scene.setupGrid(5.0, 50);

const domElement = document.getElementById("app");

const renderer = new GLRenderer(domElement);
renderer.setScene(scene);
renderer
  .getViewport()
  .getCamera()
  .setPositionAndTarget(new Vec3(2, 2, 1.7), new Vec3(0, 0, 0.4));
renderer.resumeDrawing();
