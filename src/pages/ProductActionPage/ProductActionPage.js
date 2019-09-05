import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';
class ProductActionPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }
    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    onSave = e => {
        e.preventDefault()
        var { id, txtName, txtPrice, chkbStatus } = this.state
        var { history } = this.props
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id) {//update
            this.props.onUpdateProduct(product)
        } else {
            this.props.onAddProduct(product)
        }
        history.goBack()
    }
    componentDidMount() {
        var { match } = this.props
        if (match) {
            //lay id tren url
            var id = match.params.id
            this.props.onEditProduct(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state
        return (
            <div className="container">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div>
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label >Tên sản phẩm:</label>
                                <input type="text" className="form-control" name='txtName' value={txtName} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label >Giá sản phẩm:</label>
                                <input type="number" className="form-control" name='txtPrice' value={txtPrice} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label >Trạng thái:</label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name='chkbStatus'
                                        value={chkbStatus}
                                        onChange={this.onChange}
                                        checked={chkbStatus}
                                    />
                                    Còn hàng
                       </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu</button>
                        </form>
                    </div>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct:product=>{
            dispatch(actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
