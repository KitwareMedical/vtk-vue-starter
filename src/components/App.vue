<template>
<div id="vtkcontainer"></div>
</template>

<style>
#vtkcontainer {
  width: 100%;
  height: 100%;
}
</style>

<script>
import GenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';


export default {
  mounted() {
    this.fullscreenRenderWindow = vtkFullScreenRenderWindow.newInstance({
      rootContainer: document.querySelector('#vtkcontainer'),
      containerStyle: {},
    });
    const renderer = this.fullscreenRenderWindow.getRenderer();
    const renderWindow = this.fullscreenRenderWindow.getRenderWindow();

    const actor = vtkActor.newInstance();
    const mapper = vtkMapper.newInstance();
    const source = vtkConeSource.newInstance({ height: 1.0 });

    actor.setMapper(mapper);
    mapper.setInputConnection(source.getOutputPort());

    renderer.addActor(actor);

    source.modified();
    mapper.modified();
    actor.modified();

    renderer.resetCamera();
    renderWindow.render();
  },
};
</script>
