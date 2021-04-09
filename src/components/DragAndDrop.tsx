import React, { ChangeEvent, createRef, DragEvent, MouseEvent } from "react";
import "./DragAndDrop.css";
import axios from "axios";
import Button from "@/components/Button";
import Grid from "@/components/layout/Grid";
import GridItem from "@/components/layout/GridItem";

type Props = {};
type State = {
  inDropZone: boolean;
  fileList: File[];
  fileListLoaded: string[];
};

export default class DragAndDrop extends React.Component<Props, State> {
  private file: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
  constructor(props: Props) {
    super(props);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.openLoadFile = this.openLoadFile.bind(this);
    this.previewFile = this.previewFile.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.loadFiles = this.loadFiles.bind(this);
    this.state = {
      inDropZone: false,
      fileList: [],
      fileListLoaded: [],
    };
  }
  handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      inDropZone: false,
    });
  }
  handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    this.setState({
      inDropZone: true,
    });
  }
  handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    let files = Array.from(e.dataTransfer.files);
    this.loadFiles(files);
  }
  loadFiles(files: File[]) {
    if (!files?.length) return;
    if (this.file.current) {
      this.file.current.value = "";
    }
    this.setState((state) => {
      const filesList = [...state.fileList, ...files];
      return {
        fileList: filesList,
        inDropZone: false,
      };
    });
    this.previewFiles(files);
  }
  previewFiles(files: File[]) {
    files.forEach(this.previewFile);
  }
  previewFile(file: File) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.cropImage(reader.result as string).then((path) => {
        this.setState((state) => {
          return {
            fileListLoaded: [...state.fileListLoaded, path],
          } as Pick<State, keyof State>;
        });
      });
    };
  }
  fitImageToCanvas(image: HTMLImageElement, canvas: HTMLCanvasElement) {
    const canvasContext = canvas.getContext("2d");
    const ratio = image.width / image.height;
    let newWidth = canvas.width;
    let newHeight = newWidth / ratio;
    if (newHeight < canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * ratio;
    }
    const xOffset = newWidth > canvas.width ? (canvas.width - newWidth) / 2 : 0;
    const yOffset =
      newHeight > canvas.height ? (canvas.height - newHeight) / 2 : 0;
    canvasContext?.drawImage(image, xOffset, yOffset, newWidth, newHeight);
    return canvas.toDataURL();
  }
  async cropImage(filePath: string) {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = 120;
        canvas.height = 120;
        resolve(this.fitImageToCanvas(image, canvas));
      };
      image.onerror = reject;
      image.src = filePath;
    });
  }
  onChangeFile(e: ChangeEvent<HTMLInputElement>) {
    const files: FileList | null = e.currentTarget.files;
    this.loadFiles(files ? Array.from(files) : []);
  }
  openLoadFile(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    this.file.current?.click();
  }
  removeItem(i: number) {
    this.setState((state) => {
      let fileListLoaded = Object.assign([], state.fileListLoaded);
      let fileList = Object.assign([], state.fileList);
      fileList.splice(i, 1);
      fileListLoaded.splice(i, 1);
      return {
        fileList: fileList,
        fileListLoaded: fileListLoaded,
      };
    });
  }
  uploadImage() {
    var form = new FormData();
    this.state.fileList.forEach((file) => {
      form.append("images", file);
    });
    axios.post("/upload", form);
  }
  render() {
    return (
      <Grid direction="horizontal">
        <GridItem>
          <input
            type="file"
            multiple
            accept=".jpg, .png"
            onChange={this.onChangeFile}
            className="none"
            ref={this.file}
          />
          <div
            className={
              this.state.inDropZone
                ? "drag-drop-zone inside-drag-area"
                : "drag-drop-zone"
            }
            onDrop={(e) => this.handleDrop(e)}
            onDragOver={(e) => this.handleDragOver(e)}
            onDragLeave={(e) => this.handleDragLeave(e)}
            onClick={(e) => this.openLoadFile(e)}
          >
            {this.state.fileListLoaded.length > 0 ? (
              <div className="gallery">
                {this.state.fileListLoaded.map((file, i) => {
                  return (
                    <div
                      className={"box"}
                      key={i}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img src={file} />
                      <Button
                        onClick={() => this.removeItem(i)}
                        className="close"
                        type="primary"
                        danger
                        size="small"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </Button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ marginBottom: "1rem" }}>
                Drop files here or click to upload.
              </div>
            )}
          </div>
          <div style={{ marginTop: "10px", textAlign: "right" }}>
            <Button
              onClick={this.uploadImage}
              type="default"
              disabled={this.state.fileListLoaded.length === 0}
            >
              Upload
            </Button>
          </div>
        </GridItem>
      </Grid>
    );
  }
}
