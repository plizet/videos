import { Filters as FiltersType } from '../../../types';

import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';

import { updateFilter } from '../../../redux/filters/actions';

import './FiltersBlock.css';

interface Props {
  updateFilter: (name: string, value: string) => void;
  filters: FiltersType;
}

class FiltersBlock extends Component<Props> {
  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { updateFilter } = this.props;
    if (updateFilter) {
      updateFilter(event.target.name, event.target.value);
    }
  };

  render() {
    const {
      filters: { categories, years }
    } = this.props;
    return (
      <div className='filters'>
        <form className='filters__form'>
          <select
            className='filters__select'
            name='categories'
            onChange={this.handleChange}
            value={categories.value}
          >
            {categories &&
              categories.options.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          <select
            className='filters__select'
            name='years'
            onChange={this.handleChange}
            value={years.value}
          >
            {years &&
              years.options.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  filters: state.filters
});

const mapDispatchToProps = { updateFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersBlock);
