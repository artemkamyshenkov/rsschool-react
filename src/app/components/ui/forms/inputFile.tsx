import React, { Component, ChangeEvent } from 'react';

interface InputFileProps {
  onChange: (name: string, value: string) => void;
  error: string;
}
class FileUpload extends Component<InputFileProps> {
  handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const fileContents: ArrayBuffer | string =
          event.target?.result !== null ? event.target!.result : '';
        if (fileContents instanceof ArrayBuffer) {
          const newFile: Blob = new Blob([fileContents], { type: file.type });
          const fileUrl: string = URL.createObjectURL(newFile);
          this.props.onChange('productImg', fileUrl);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  render() {
    return (
      <div className="upload__file">
        <label htmlFor="input__file">Add product photo</label>
        <input
          className="input__file"
          id="input__file"
          type="file"
          onChange={this.handleFileChange}
          data-testid="productImg-input"
        />
        {this.props.error && <p className="text__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default FileUpload;
